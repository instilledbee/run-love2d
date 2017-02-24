define(function (require, exports, module) {
    "use strict";

    var CommandManager    = brackets.getModule("command/CommandManager"),
        Menus             = brackets.getModule("command/Menus"),
        KeyBindingManager = brackets.getModule("command/KeyBindingManager"),
        NodeDomain        = brackets.getModule("utils/NodeDomain"),
        ExtensionUtils    = brackets.getModule("utils/ExtensionUtils"),
        ProjectManager    = brackets.getModule("project/ProjectManager");
    
    var loveDomain = new NodeDomain("love2d", ExtensionUtils.getModulePath(module, "node/LoveDomain"));
    
    // Helper function that runs the simple.getMemory command and
    // logs the result to the console
    function startLove() {
        loveDomain.exec("runLove", ProjectManager.getProjectRoot().fullPath)
            .done(function () {
                console.log("[instilledbee.run-love2d] Love2D started");
            }).fail(function (err) {
                console.error("[instilledbee.run-love2d] Failed to start Love2D: ", err);
            });
    }

    var RUN_LOVE = "instilledbee.runlove";
    CommandManager.register("Run with LÖVE", RUN_LOVE, startLove);
    KeyBindingManager.addBinding(RUN_LOVE, "Ctrl-Shift-L");
    
    var menu = Menus.getMenu(Menus.AppMenuBar.EDIT_MENU);
    menu.addMenuDivider();
    menu.addMenuItem(RUN_LOVE);
});