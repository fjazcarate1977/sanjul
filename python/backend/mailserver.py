import smtplib
import os


sender_add = os.environ['EMAIL_ADDRESS']
password = os.environ['EMAIL_PASSWORD']
server = os.environ['EMAIL_SERVER']
port = os.environ['EMAIL_PORT']

msg_to_be_sent = '''
          Hello, receiver!
          Hope you are doing well.
          Welcome to PythonGeeks!
          '''


def activate_server(receiver_add):
    if server and port and sender_add and password:
        smtp_server = smtplib.SMTP(server, int(port))
        smtp_server.ehlo()

        smtp_server.starttls()
        smtp_server.ehlo()

        smtp_server.login(sender_add, password)
        smtp_server.sendmail(sender_add, receiver_add, msg_to_be_sent)

        smtp_server.quit()
