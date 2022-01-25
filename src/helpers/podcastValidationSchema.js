import * as yup from 'yup';

const podcastValidationSchema = () => 
    yup.object({
        guestName: yup.string().required('Enter guest name'),
        projectName: yup.string().required('Enter project name'),
        website: yup.string().url('Must be a valid url with protocol').max(100),
        contactMethod: yup.string().oneOf(['emailoption', 'telegramoption', 'discordoption', 'otheroption']),
        email: yup.string().email().when("contactMethod", {
          is: 'emailoption',
          then: yup.string().required("Must enter email address")
        }),
        discordLink: yup.string().when("contactMethod", {
          is: 'discordoption',
          then: yup.string().url('Must be a valid url with protocol').required("Must enter discord link")
        }),
        discordHandle: yup.string().when("contactMethod", {
          is: 'discordoption',
          then: yup.string().max(32, "Max 32 characters").required("Must enter discord handle")
        }),
        telegramHandle: yup.string().when("contactMethod", {
          is: 'telegramoption',
          then: yup.string().max(32, "Max 32 characters").required("Must enter telegram handle")
        }),
        otherWay: yup.string().when("contactMethod", {
          is: 'otheroption',
          then: yup.string().max(5, "Max 100 characters").required("Must specify a way to contact you")
        }),
    });

export default podcastValidationSchema;
