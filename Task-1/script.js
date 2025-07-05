// SOLID Principles Task-1: Notification Class
/* class Notification {
    constructor(type) {
      this.type = type; // "email", "sms", or "telegram"
    }
    send(message, emailAddress, phoneNumber, telegramId) {
      if (this.type === 'email') {
        if (!emailAddress) throw new Error("Email required");
        console.log(`Sending EMAIL to ${emailAddress}: ${message}`);
      } else if (this.type === 'sms') {
        if (!phoneNumber) throw new Error("Phone number required");
        console.log(`Sending SMS to ${phoneNumber}: ${message}`);
      } else if (this.type === 'telegram') {g
        if (!telegramId) throw new Error("Telegram ID required");
        console.log(`Sending Telegram to ${telegramId}: ${message}`);
      } else {
        throw new Error("Unknown notification type");
      }
    }
  }
  
  const n1 = new Notification('email');
  n1.send('Hello!', 'nexus@email.com', null, null);
  
  const n2 = new Notification('sms');
  n2.send('Hi!', null, '1234567890', null);
  
  const n3 = new Notification('telegram');
  n3.send('Yo!', null, null, 'telegram_user_42'); */

//Corrected Version
class NotificationChannel {
  send(message) {
    throw new Error("Must be implemented");
  }
}

class Email extends NotificationChannel {
  send(message, emailAddress) {
    if (!emailAddress) throw new Error("Email required");
    console.log(`Sending EMAIL to ${emailAddress}: ${message}`);
  }
}
class SMS extends NotificationChannel {
  send(message, phoneNumber) {
    if (!phoneNumber) throw new Error("Phone number required");
    console.log(`Sending SMS to ${phoneNumber}: ${message}`);
  }
}
class telegram extends NotificationChannel {
  send(message, telegramID) {
    if (!telegramId) throw new Error("Telegram ID required");
    console.log(`Sending Telegram to ${telegramId}: ${message}`);
  }
}

class Notification {
  constructor(type) {
    this.type = type;
  }

  notify(message) {
    this.type.send(message);
  }
}

const emailChannel = new Email();

const n1 = new NotificationChannel("email");
n1.send("Hello!", "nexus@email.com", null, null);

const n2 = new NotificationChannel("sms");
n2.send("Hi!", null, "1234567890", null);

const n3 = new NotificationChannel("telegram");
n3.send("Yo!", null, null, "telegram_user_42");
