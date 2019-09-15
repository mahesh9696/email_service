var nodemailer = require('nodemailer');

export default {
    Query: {
        async mails(root: any, args: any, { models }: any) {
            return models.Mail.findAll()
        },
        async mail(root, { id }, { models }) {
            return models.Mail.findByPk(id)
        },
    },
    Mutation: {
        async deleteEmail(root, { id }, { models }) {
            return models.Mail.destory({
                where: { id: id }
            })
        },
        async sendEmail(root: any, { message, subject, recieverEmail }: any, { models }: any) {

            var transporter: any = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'maheshpate12347@gmail.com',
                    pass: 'M159753#'
                }
            });

            var reg: any = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

            if (message == '') {
                throw new Error("message field is required");
            } else if (subject == '') {
                throw new Error("subject field is required");
            } else if (recieverEmail == '') {
                throw new Error("recieverEmail field is required");
            } else if (reg.test(recieverEmail) == false) {
                throw new Error("Invalid Email Address");
            }

            var mailOptions: any = {
                from: 'maheshpate12347@gmail.com',
                to: recieverEmail,
                subject: subject,
                text: message
            };
            let senderEmail: string = 'maheshpate12347@gmail.com';
            let sentStatus: number = 1;
            let readStatus: number = 0;
            return await transporter.sendMail(mailOptions).then(function (info) {
                return models.Mail.create({
                    message,
                    subject,
                    recieverEmail,
                    senderEmail,
                    sentStatus,
                    readStatus
                })
            }).catch(function (err) {
                console.log(err);
            });
        }
    }
}



