import nodemailer from 'nodemailer';
import serverConfig from '../config';

const sendMailToAccount = (account, message) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'salahdin.lazantsy@gmail.com',
      pass: 'Salahdin@1314',
    },
  });
  // TODO faire contenu message par flag CANDIDATS_NOK et CANDIDATS_NOK_NOM etc...

  const mailOptions = {
    form: 'candilib@securite-routiere.gouv.fr',
    to: account,
    subject: 'Email de Candilib 93',
    text: 'confirmation de Rendez Vous',
    html: `<p><!DOCTYPE html>
        <html>
            <head>
            <title>Email de Candilib 93</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <meta content="width=device-width">
            <style type="text/css">
            /* Fonts and Content */
            body, td { font-family: 'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif; font-size:14px; color:rgba(0,0,0, 0.54); }
            body { background-color: #ffffff; margin: 0; padding: 0; -webkit-text-size-adjust:none; -ms-text-size-adjust:none; }
            h2{ padding-top:12px; /* ne fonctionnera pas sous Outlook 2007+ */color:rgba(0,0,0, 0.54); font-size:22px; }
            
            @media only screen and (max-width: 480px) { 

                table[class=w275], td[class=w275], img[class=w275] { width:135px !important; }
                table[class=w30], td[class=w30], img[class=w30] { width:10px !important; }  
                table[class=w580], td[class=w580], img[class=w580] { width:280px !important; }
                table[class=w640], td[class=w640], img[class=w640] { width:300px !important; }
                img{ height:auto;}
                /*illisible, on passe donc sur 3 lignes */
                table[class=w180], td[class=w180], img[class=w180] { 
                    width:280px !important; 
                    display:block;
                }    
                td[class=w20]{ display:none; }    
            } 

            </style>
   
            </head>
            <body style="margin:20px; padding:0px; -webkit-text-size-adjust:none;">

                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:rgb(255, 255, 255)" >
                    <tbody>
                        <tr>
                            <td align="center" bgcolor="#FFFFFF">
                                <table  cellpadding="0" cellspacing="0" border="0">
                                    <tbody>                            
                                        <tr>
                                            <td class="w640"  width="640" height="10"></td>
                                        </tr>
                                        <tr>
                                            <td class="w640"  width="640" height="10"></td>
                                        </tr>
                                        <!-- entete -->
                                        <tr class="pagetoplogo">
                                            <td class="w640"  width="640">
                                                <table  class="w640"  width="640" cellpadding="0" cellspacing="0" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td class="w30"  width="30"></td>
                                                            <td  class="w580"  width="580" valign="middle" align="left">
                                                                <div class="pagetoplogo-content">
                                                                    <img 
                                                                        class="w580" 
                                                                        style="text-decoration: none; display: block; color:#476688; font-size:30px;background-color: #008800" 
                                                                        src="${serverConfig.host}/e90df5023690b8ced7b481d69f5e7c77.png" 
                                                                        alt="Mon Logo" 
                                                                        width="100%" height="100%"/>
                                                                </div>
                                                            </td> 
                                                            <td class="w30"  width="30"></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <!-- contenu -->
                                        <tr class="content">
                                            <td class="w640" class="w640"  width="640" bgcolor="#ffffff">
                                                <table class="w640"  width="640" cellpadding="0" cellspacing="0" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td  class="w30"  width="30"></td>
                                                            <td  align="center" class="w580"  width="580">
                                                                <!-- une zone de contenu -->
                                                                <table class="w580"  width="580" cellpadding="0" cellspacing="0" border="0">
                                                                    <tbody>                                                            
                                                                        <tr>
                                                                            <td class="w580"  width="580">
                                                                                <h2 style="color:rgba(0,0,0, 0.54); font-size:22px; padding-top:12px;">
                                                                                   CANDILIB 93
                                                                                </h2>

                                                                                <div align="center" class="article-content">
                                                                                    <p> 
                                                                                        ${message}
                                                                                    </p>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <!-- fin zone -->                                                   


                                                            </td>
                                                            <td class="w30" class="w30"  width="30"></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>

                                        <!--  separateur horizontal de 15px de haut -->
                                        <tr>
                                            <td class="w640"  width="640" height="15" bgcolor="#ffffff"></td>
                                        </tr>

                                        <!-- pied de page -->
                                        <tr class="pagebottom">
                                            <td class="w640"  width="640">
                                                <table class="w640"  width="640" cellpadding="0" cellspacing="0" border="0" bgcolor="#c7c7c7">
                                                    <tbody>
                                                        <tr>
                                                            <td colspan="5" height="10"></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="w30"  width="30"></td>
                                                            <td class="w580"  width="580" valign="top">
                                                                <p align="right" class="pagebottom-content-left">
                                                                    <a style="color:rgba(0,0,0, 0.54)" href="#"><span style="color:rgba(0,0,0, 0.54)">Candilib 2018</span></a>
                                                                </p>
                                                            </td>

                                                            <td class="w30"  width="30"></td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="5" height="10"></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="w640"  width="640" height="60"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </body>
        </html></p>`,
  };

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      console.log(err); // eslint-disable-line no-console
    }
  });
};

export default sendMailToAccount;

