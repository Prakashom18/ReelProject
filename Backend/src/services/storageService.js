// SDK initialization

const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey : "public_N0gRgKOD0pXLYqw9RgEuhxEEsiQ=",
    privateKey : "private_ImV/uQiBpO******************",
    urlEndpoint : "https://ik.imagekit.io/cl0gfau08"
});

async function uploadFile(file,fileName){

    const result = await imagekit.upload({
        file : file,
        fileName :fileName

    })
    return result;
}

module.exports ={
    uploadFile
}