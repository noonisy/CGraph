# CGraph

A Typecho plugin for generating a heatmap of article modifications over the past year.
 
## Installation

1. Download the plugin from the [releases](https://github.com/noonisy/CGraph/releases) page.
2. Extract the downloaded file and upload the `CGraph` folder to the `usr/plugins/` directory of your Typecho installation.

## Usage

1. Activate the plugin from the Typecho plugin management page.
2. The plugin will start recording article modification counts from now on, forming a heatmap.
3. The heatmap will be displayed on the homepage or tag page.


展示代码如下：
```
<?php if ($this->user->hasLogin() && isset($plugins['activated']['CGraph']) ){ ?>
<div class="mdui-card-primary-title">贡献图</div>
<?php $item = json_encode(CGraph_Plugin::getGraphData()); $ContributeTotal=0;
// 将JSON字符串解析为PHP数组
$array = json_decode($item, true);
// 遍历数组并累加count值
foreach ($array as $i) {
    $ContributeTotal += $i['count'];
    // echo '当前'.$ContributeTotal;
}
?>
<div class="mdui-card-primary-subtitle">近一年共计<?php echo $ContributeTotal; ?>个贡献</div>
<div class="mdui-card-content" id="tag-container">
    <style>
        #tooltip {zindex: 999;display: none;position: fixed;left: 0;top: 0;height: 25px;background-color: rgba(0, 0, 0, .8);color: #fff;padding: 4px 10px;border-radius: 3px;font-size: 1.02em}
        #tooltip:after {display: block;position: absolute;content: '';bottom: -6px;left: 50%;margin-left: -6px;width: 0; height: 0; border-left: 6px solid transparent;border-right: 6px solid transparent;border-top: 6px solid rgba(0, 0, 0, .8);}
        svg {width: 100%; height: 100%}
    </style>
    <div id='svg'></div>
    <div id='tooltip'></div>
    <?php
    // $item = json_encode(CGraph_Plugin::getGraphData());
    echo "<script>
    $(document).on('pjax:popstate', function (event) {
        // 自定义 tag.html
        if (event.currentTarget.URL.endsWith('/tag.html')) {
            event.preventDefault();
            $.pjax.defaults.maxCacheLength = 0;
            location = event.currentTarget.URL;
        }
    });
    (function() {
        if (typeof graphOption === 'undefined') {
            graphOption = {
                tooptipId: '#tooltip',
                graphId: '#svg',
                tooltipFormat: '{1}篇内容于{0}修改',
                graphData: {$item},
                option: {}
            };
        }
        })();
    </script>";
    ?>
    <script src="<?php echo 'usr/plugins/CGraph/bundle.js'; ?>"></script>
</div>
<?php } ?>
```