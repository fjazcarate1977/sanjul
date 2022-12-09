import smtplib
import os


senderAdd = os.environ['EMAIL_ADDRESS']
password = os.environ['EMAIL_PASSWORD']
server = os.environ['EMAIL_SERVER']
port = os.environ['EMAIL_PORT']

msg_to_be_sent = '''
          Hello, receiver!
          Hope you are doing well.
          Welcome to PythonGeeks!
          '''


def activate_server(receiverAdd):
    if server and port and senderAdd and password:
        smtp_server = smtplib.SMTP(server, int(port))
        smtp_server.ehlo()

        smtp_server.starttls()
        smtp_server.ehlo()

        smtp_server.login(senderAdd, password)
        smtp_server.sendmail(senderAdd, receiverAdd, msg_to_be_sent)

        smtp_server.quit()
