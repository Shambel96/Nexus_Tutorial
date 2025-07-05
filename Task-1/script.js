// SOLID Principles Task-1: Notification Class

// Error code that violet SOLID principles
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
// 1. Base abstract class
class NotificationChannel {
  send(message, recipient) {
    throw new Error("Must be implemented");
  }
}

// 2. for Email to follow SRP
class Email extends NotificationChannel {
  send(message, recipient) {
    if (!recipient || !recipient.email) {
      throw new Error("Email required");
    }
    console.log(`Sending EMAIL to ${recipient.email}: ${message}`);
  }
}

// 3. for SMS
class SMS extends NotificationChannel {
  send(message, recipient) {
    if (!recipient || !recipient.phone) {
      throw new Error("Phone number is required");
    }
    console.log(`Sending SMS to ${recipient.phone}: ${message}`);
  }
}

// 4. for Telegram
class Telegram extends NotificationChannel {
  send(message, recipient) {
    if (!recipient || !recipient.telegramId) {
      throw new Error("Telegram ID is required");
    }
    console.log(`Sending Telegram to ${recipient.telegramId}: ${message}`);
  }
}

class Notification {
  constructor(channel) {
    this.channel = channel;
  }

  notify(message, recipient) {
    try {
      this.channel.send(message, recipient);
    } catch (error) {
      console.error(`Unknown notification type: ${error.message}`);
    }
  }
}

// 6. Creating instances of each service
const email = new Email();
const sms = new SMS();
const telegram = new Telegram();

// 7. Create Notification for each of the services
const emailNotification = new Notification(email);
const smsNotification = new Notification(sms);
const telegramNotification = new Notification(telegram);

// 8. Send messages
emailNotification.notify("Hello!", { email: "nexus@email.com" });
smsNotification.notify("Hi!", { phone: "1234567890" });
telegramNotification.notify("Yo!", {
  telegramId: "telegram_user_42",
});

// 9. Testing with missing recipient (should trigger error handling)
emailNotification.notify("Should fail", null);
