
// <--- MAIL CONTACT INFO TO ME --->
/*
router.post('/contact', function (req, res) {
    var data = req.body;
    /*  var transporter = nodemailer.createTransport({ // Old method
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: 'snapdragonxc@gmail.com',
              pass: 'XXXXXXX'
          }
      }); */ /*
    var transporter = nodemailer.createTransport({ // use 0Auth2
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: 'snapdragonxc@gmail.com',
            clientId: config.mail.clientId,
            clientSecret: config.mail.clientSecret,
            refreshToken: config.mail.refreshToken,
            accessToken: config.mail.accessToken,
            expires: 1484314697598
        }
    });
    transporter.sendMail({  //email options
        from: "Sender Name",
        to: "snapdragonxc@gmail.com", // receiver
        subject: "Blog Msg: " + data.subject, // subject
        html: data.msg + ' from: ' + data.from,
    }, function(error, response){  //callback
        if(error) {
            console.log(error);
            return res.send(500, err);
        }else{
            console.log("Message sent: " + response.message);
            res.json(req.body);
        }
        transporter.close();
    });
});
*/
