<?php

/**
 * 生成过去一年修改的热图
 * @package CGraph
 * @author Noonisy
 * @version 0.0.2
 * @link https://www.noonisy.com
 */
class CGraph_Plugin implements Typecho_Plugin_Interface
{
    public static $graphStatData;

    /**
     * 激活插件方法,如果激活失败,直接抛出异常
     * 
     * @access public
     * @return void
     * @throws Typecho_Plugin_Exception
     */
    public static function activate()
    {
        // 检查表是否已存在
        $db = Typecho_Db::get();
        $prefix = $db->getPrefix();
        
        // 先尝试查询表是否存在
        try {
            $db->query("SHOW TABLES LIKE '{$prefix}edit_times'");
        } catch (Exception $e) {
            // 表不存在时创建
            self::createTable();
        }
        // 注册插件钩子
        Typecho_Plugin::factory('Widget_Contents_Post_Edit')->finishPublish = array('CGraph_Plugin', 'recordEditTime');

        return _t('插件已激活，修改时间记录已开始.');
    }

    /**
     * 禁用插件方法,如果禁用失败,直接抛出异常
     * 
     * @static
     * @access public
     * @return void
     * @throws Typecho_Plugin_Exception
     */
    public static function deactivate()
    {
        return '插件已禁用';
    }

    /**
     * 获取插件配置面板
     * 
     * @access public
     * @param Typecho_Widget_Helper_Form $form 配置面板
     * @return void
     */
    public static function config(Typecho_Widget_Helper_Form $form)
    {
        /** 名称 */
        // $name = new Typecho_Widget_Helper_Form_Element_Text('word', null, 'Hello World', _t('说点什么'));
        // $form->addInput($name);
    }

    /**
     * 个人用户的配置面板
     * 
     * @access public
     * @param Typecho_Widget_Helper_Form $form
     * @return void
     */
    public static function personalConfig(Typecho_Widget_Helper_Form $form)
    {
    }

    /**
     * 获取热图数据
     * 
     * @return void
     * @throws Typecho_Plugin_Exception
     */
    public static function getGraphData()
    {
        if (!self::$graphStatData) {
            $db = Typecho_Db::get();
            $options = Helper::options();
            $resource = $db->query($db->select('edit_time')->from('table.edit_times')
                                    //   ->where('type = ?', 'post')
                                    //   ->where('table.contents.status = ?', 'publish')
                                      ->where('table.edit_times.edit_time > ?', strtotime("-1year"))
                                      ->order('table.edit_times.edit_time', Typecho_Db::SORT_ASC));
            $offset = $options->timezone - $options->serverTimezone;
            $result = [];
            while ($post = $db->fetchRow($resource)) {
                $timeStamp = $post['edit_time'] + $offset;
                $date = date("Y-m-d", $timeStamp);
                if (isset($result[$date])) {
                    $result[$date]['count']++;
                } else {
                    $result[$date]['date'] = $date;
                    $result[$date]['count'] = 1;
                }
            }
            self::$graphStatData = array_values($result);
        }
        return self::$graphStatData;
    }

    private static function createTable()
    {
        // 创建数据表
        $db = Typecho_Db::get();
        $prefix = $db->getPrefix();
        $sql = "CREATE TABLE IF NOT EXISTS `" . $prefix . "edit_times` (
            `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
            `cid` int(10) unsigned NOT NULL,
            `edit_time` int(10) unsigned,
            PRIMARY KEY (`id`),
            KEY `cid` (`cid`)
        ) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;";
        $db->query($sql, Typecho_Db::WRITE);
    }

    public static function recordEditTime($contents, $edit)
    {
        // 在保存文章时记录修改时间
        if (empty($edit->cid)) {
            return;
        }
        $db = Typecho_Db::get();
        $prefix = $db->getPrefix();
        $edit_time = time();
        $cid = $edit->cid;
        // 插入新记录到 edit_history 表
        $db->query($db->insert($prefix . 'edit_times')
            ->rows(array('cid' => (int)$cid, 'edit_time' => $edit_time)));
        // 返回原始内容
        // return $content;
    }
}