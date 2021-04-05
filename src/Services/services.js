import emailjs from 'emailjs-com';

export function sendEmail(e) {
    emailjs.sendForm('service_c6x1b9s', 'template_0pj2lca', e.target, 'user_TbScQZ8tGXLllpAX42R0m')
    .then((result) => {  
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
}
