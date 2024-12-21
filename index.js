// You have to write the Node.js Programs TO clearn clutter inside of a diretory and organize the content of that directory into diffrenet folder

// for example , these files becomes

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. priyu.zip
// 5. Panwar.jpg

//this:
// jpg/name.jpg , jpg/cat.jpg

// png/name.png
// zip/priyu.zip , \\

import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basepath = "E:\\MERN STACK\\MERN 8";

let files = await fs.readdir(basepath);

for (const item of files) {
    console.log("running for" , item);
    
  let ext = item.split(".")[item.split(".").length - 1];
  if (ext != "js" && ext != "json" && item.split(".").length > 1) {

    
    if (fsn.existsSync(path.join(basepath, ext))) {
      //Move the file to this directory if its not the js and json files
      fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
    } else {
      fs.mkdir(ext);
    }
  }
}
