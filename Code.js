function sendConfirmationEmail(e) {
  Logger.log("authMode=%s, source.getId()=%s", e.authMode, e.source.getId());
  var items = e.response.getItemResponses();
  var name = items[0].getResponse();
  var address = e.response.getRespondentEmail();
  var subject = "César Chávez Day of Service"
  
  var greeting = "Hello ".concat(name, ",");
  var thankyou = "\n\nThank you for signing up for Omega Delta Phi's César Chávez Day of Service! We Look forward to seeing you on Saturday, April 6th at 9:00am.";
  var breakfast = " As a reminder, we will provide you with free breakfast, lunch, and transportation to and from your service site.";
  var share = "\n\nPlease share this event with your friends! Service is always done best as a community :) Here is the Facebook link to the event: ";
  var facebook = "\n\nhttps://www.facebook.com/events/2200685970145363/";
  var going = "\n\nIf you haven't already done so, please hit going on the event! If for some reason you are unable to attend the event, please let us know as soon as possible by emailing this address.";
  var signature = "\n\nThank you, \nOmega Delta Phi, Alpha Alpha Chapter";
  var message = greeting.concat(thankyou, breakfast, share, facebook, going, signature);
  
  GmailApp.sendEmail(address, subject, message);
}
