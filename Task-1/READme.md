The given code violet all SOLID software design principles.
Because 1. SRP says Class should have only a single responsibility but in the given code all of the functionality done under a single class Notification so it violets SRP... instead it should have to be divided into single different class for each notification type (email, sms, telegram) then extend from the given class.

2. OCP says the code should opened for extension but not for modification (closed) so that in our case we cannot add more behavior unless we modify the given send method code this violet OCP.

3. LSP says object of superclass must be implemented in all subclasses that means all subclass does not have to violet functionality of the superclass.

4. ISP says each class must not forced to do what not belonged it....in the given code the send method method do all function without differentiating which belonged to it or not...that the given class handles too much functionality without split it.

5. DIP say high level class must depend in low level class in abstraction not concrete way but in our case the give code follows the concrete way so that it violets the DIP SOLID principles

