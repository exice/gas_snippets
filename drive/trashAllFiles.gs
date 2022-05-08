// drive内ファイルを全てゴミ箱へ移動
function trashAllFiles() {
  // Get all files in Drive
  var files = DriveApp.getFiles();

  // Delete every file
  while (files.hasNext()) {
    var file = files.next();
    var name = file.getName()
    Logger.log('Moving file to trash: "%s"', name);
    if (name.indexOf('trashAllFiles') != -1) {
      // do nothing
    }else{
      file.setTrashed(true);
    }
    // // Delete File
    // Drive.Files.remove(file.getId())
  }
}