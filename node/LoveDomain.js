const exec = require('child_process').exec;

function cmdRunLove(currDir) {
    console.log(`Running LOVE in directory: ${currDir}`);
    exec('love ' + currDir, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });
}

function init(domainManager) {
    if (!domainManager.hasDomain("love2d")) {
        domainManager.registerDomain("love2d", {major: 0, minor: 1});
    }
    domainManager.registerCommand(
        "love2d",
        "runLove",
        cmdRunLove,
        false,
        "Run the LOVE2D interpreter for the current project directory"
    );
}

exports.init = init;