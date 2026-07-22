const 提醒name = "Coming to Industry";
const 提醒name1 = "模组已正常运行";

//本文件用于加载提醒在游戏中显示，main中try{……}包裹的模块错误信息

function createStableDialog() {
    try {
        // 1. 创建基础对话框
        var dialog = new BaseDialog(提醒name);
        dialog.cont.margin(12);
        
        // 2. 使用表格布局（最稳定）
        var mainTable = new Table();
        mainTable.defaults().pad(8);
        
        // 3. 添加标题（简化版）
        var title = new Label(提醒name1 + "\n若本对话框未弹出，请检查模组完整性");
        title.setColor(Color.yellow);
        mainTable.add(title).center().row();
        
        // 4. 添加分隔线
        mainTable.image()
            .color(Color.gray)
            .height(2)
            .growX()
            .padBottom(8)
            .row();
        
        // 5. 消息内容（稳定实现）
        var messages = [
 "欢迎使用V155.2+ 将至[CTI]，推荐使用横屏进行游戏\n若你当前安装的是BETA版，我不能完全保证其稳定性\nQ群:602687492[欢迎加入]\n鸣谢:制图师，秦一爱吃曲奇，冰洁雪糕\n使用本模组时，可以于游戏内“墙”类里面查询模组背景\n更新内容已移动至“墙”类建筑“历代更新”内\n\nIt is recommended to play in landscape mode\nPlease click the Close button"        
             ];
       

        // 检查是否有错误消息
        if (global.errorMessages && global.errorMessages.length > 0) {
            messages.push("[white]===== 错误记录 =====");
            global.errorMessages.forEach(msg => {
                messages.push("[green]ERROR!!!请检测模组内文件完整性及代码完整性" + msg);
            });
        } else {
            messages.push("正常");
        }
        
        // 添加消息到表格
        messages.forEach(function(msg) {
            var label = new Label(msg);
            if (msg.includes("异常 请检查js")) label.setColor(Color.red);
            else if (msg.includes("[white]")) label.setColor(Color.white);
            else if (msg.includes("[green]")) label.setColor(Color.green);
            mainTable.add(label).left().row();
        });
        
        // 6. 创建滚动面板（必须先于动画）
        var scroll = new ScrollPane(mainTable);
        var contentContainer = new Table();
        contentContainer.add(scroll).size(500, 600);
        
        // 7. 添加到对话框（必须在动画前完成）
        dialog.cont.add(contentContainer);
        
        // 8. 动画配置（必须在所有组件添加后）
        contentContainer.actions(
            Actions.sequence(
                Actions.alpha(0),
                Actions.fadeIn(1.5)
            )
        );
        
        // 9. 按钮配置
        var buttonTable = new Table();
        buttonTable.defaults().pad(4);
        
        buttonTable.button("完成阅读,Close", function() {
            dialog.hide();
        }).size(160, 50);
        
buttonTable.button("复制提示", function() {
      let copyText = global.errorMessages.join("\n");
      Core.app.setClipboardText(copyText);


 var fuzhixiaoxi=(global.errorMessages&&global.errorMessages.length)?"已复制":"无错误消息";//&&逻辑运算符“与”，（？"内容"："内容"）三元运算符
        
// 在对话框内直接显示临时标签（避免闪退）
      let tempLabel = new Label(fuzhixiaoxi);
      tempLabel.setColor(Color.green);
      dialog.cont.add(tempLabel).row();
      
      // 2秒后移除提示
      Timer.schedule(() => {
          tempLabel.remove();
      }, 2);
                   
      
  }).size(160, 50);
  
  
        dialog.buttons.add(buttonTable);
        dialog.buttons.marginBottom(300);  // 向上移动20像素
        dialog.buttons.row();  // 确保布局生效
        
        return dialog;
        
    } catch(err) {
        Log.err("[提醒崩溃] 类型:", typeof err, 
               "\n消息:", err.message || "(无)", 
               "\n堆栈:", err.stack || "(无)");
        return null;
    }
}

// 安全显示流程
function showDialogSafely() {
    Core.app.post(function() {
        try {
            var dialog = createStableDialog();
            if(dialog) {
                dialog.show();
                Log.info("对话框显示成功");
            }
        } catch(e) {
            Log.err("最终显示失败:", e);
        }
    });
}

// 初始化入口
Events.on(EventType.ClientLoadEvent, function() {
    Timer.schedule(showDialogSafely, 0.2);
});
