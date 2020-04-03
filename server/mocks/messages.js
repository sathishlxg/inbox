/*jshint node:true*/
module.exports = function(app) {
    var express = require("express");
    var messagesRouter = express.Router();

    messagesRouter.get("/", function(req, res) {
        res.send({
            message: [
                {
                    id: 1,
                    avatar:
                        "https://lh4.googleusercontent.com/-GXmmnYTuWkg/AAAAAAAAAAI/AAAAAAAAAAA/oK6DEDS7grM/w56-h56/photo.jpg",
                    senderName: "Sathish kumar Thangaraj",
                    subject: "FW: Jobs to Apply for",
                    content:
                        "The only thing I can think to do is trigger an event when the window resizes and dynamically set a new fixed width on text-div, but this just feels inelegant, especially considering padding and other neighboring artifacts I'd have to subtract out to get a proper width.",
                    hasAttachements: true,
                    hasPictures: true,
                    isPinned: false,
                    attachments: [
                        {
                            id: "1.1",
                            fileName: "Design document v1.0",
                            fileType: "document",
                            ext: ".docx",
                            url: "https://google.com"
                        },
                        {
                            id: "1.2",
                            fileName: "Phone Bill",
                            fileType: "document",
                            ext: ".xlsx",
                            url: "https://google.com"
                        },
                        {
                            id: "1.3",
                            fileName: "EL245675326US",
                            fileType: "document",
                            ext: ".pdf",
                            url: "https://google.com"
                        },
                        {
                            id: "1.4",
                            fileName: "Sathish",
                            fileType: "image",
                            ext: ".jpeg",
                            url: "https://google.com",
                            clipSrc:
                                "https://lh3.googleusercontent.com/-gR6Xo5_uP8s/AAAAAAAAAAI/AAAAAAAAAAA/5CTZklN08qY/s132-c/photo.jpg"
                        },
                        {
                            id: "1.5",
                            fileName: "Salim | Maskara | Tamil Movie Song",
                            fileType: "video",
                            ext: ".mpeg",
                            description: "4:56 - Youtube",
                            url: "https://google.com",
                            clipSrc:
                                "https://ci6.googleusercontent.com/proxy/zhVGOpL5idNAKq_vbCRCjdgAZy3oaX_Ju5rwNPC_K1SRIwGUQlpPpaco-1T-NepnzdSXxNR8Bh_D7p4qWE7oomy0JKugJA=nu"
                        }
                    ]
                },
                {
                    id: 2,
                    avatar:
                        "https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_a_56.png",
                    senderName: "Alex",
                    subject: "Saregama Tamil",
                    content:
                        "Watch the peppy love song Mascara Pottu sung by Vijay Antony & Supriya Joshi from the action cum romantic flick Salim.",
                    hasVideos: true,
                    isPinned: false,
                    attachments: []
                },
                {
                    id: 3,
                    avatar:
                        "https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_g_56.png",
                    senderName: "Google",
                    subject: "New sign-in from Chrome on Windows",
                    content:
                        "Hi Sathish kumar, Your Google Account sathishlxg@gmail.com was",
                    isPinned: false,
                    attachments: [
                        {
                            id: "3.1",
                            fileName: "Sathish",
                            fileType: "image",
                            ext: ".jpeg",
                            url: "https://google.com",
                            clipSrc:
                                "https://lh3.googleusercontent.com/-gR6Xo5_uP8s/AAAAAAAAAAI/AAAAAAAAAAA/5CTZklN08qY/s132-c/photo.jpg"
                        }
                    ]
                },
                {
                    id: 4,
                    avatar:
                        "https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_m_56.png",
                    senderName: "Max",
                    subject: "Buffalo boy",
                    content:
                        "Once in your life time you will truly come across someone",
                    hasAttachements: true,
                    isPinned: false,
                    attachments: [
                        {
                            id: "4.1",
                            fileName: "Design document v1.0",
                            fileType: "document",
                            ext: ".docx",
                            url: "https://google.com"
                        },
                        {
                            id: "4.2",
                            fileName: "Phone Bill",
                            fileType: "document",
                            ext: ".xlsx",
                            url: "https://google.com"
                        },
                        {
                            id: "4.3",
                            fileName: "EL245675326US",
                            fileType: "document",
                            ext: ".pdf",
                            url: "https://google.com"
                        },
                        {
                            id: "4.4",
                            fileName: "Design document v1.0",
                            fileType: "document",
                            ext: ".docx",
                            url: "https://google.com"
                        },
                        {
                            id: "4.5",
                            fileName: "Phone Bill",
                            fileType: "document",
                            ext: ".xlsx",
                            url: "https://google.com"
                        },
                        {
                            id: "4.6",
                            fileName: "EL245675326US",
                            fileType: "document",
                            ext: ".pdf",
                            url: "https://google.com"
                        },
                        {
                            id: "4.7",
                            fileName: "Design document v1.0",
                            fileType: "document",
                            ext: ".docx",
                            url: "https://google.com"
                        },
                        {
                            id: "4.8",
                            fileName: "Phone Bill",
                            fileType: "document",
                            ext: ".xlsx",
                            url: "https://google.com"
                        },
                        {
                            id: "4.9",
                            fileName: "EL245675326US",
                            fileType: "document",
                            ext: ".pdf",
                            url: "https://google.com"
                        }
                    ]
                }
            ]
        });
    });

    messagesRouter.post("/", function(req, res) {
        res.status(201).end();
    });

    messagesRouter.get("/:id", function(req, res) {
        res.send({
            message: {
                id: req.params.id
            }
        });
    });

    messagesRouter.put("/:id", function(req, res) {
        res.send({
            message: {
                id: req.params.id
            }
        });
    });

    messagesRouter.delete("/:id", function(req, res) {
        res.status(204).end();
    });

    // The POST and PUT call will not contain a request body
    // because the body-parser is not included by default.
    // To use req.body, run:

    //    npm install --save-dev body-parser

    // After installing, you need to `use` the body-parser for
    // this mock uncommenting the following line:
    //
    //app.use('/api/message', require('body-parser'));
    app.use("/messages", messagesRouter);
};
