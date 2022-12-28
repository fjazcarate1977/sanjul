import smtplib
import os
import json
from email.message import EmailMessage
from string import Template
from email.utils import make_msgid


senderAdd = os.environ['EMAIL_ADDRESS']
password = os.environ['EMAIL_PASSWORD']
server = os.environ['EMAIL_SERVER']
port = os.environ['EMAIL_PORT']


def activate_server(fieldsDict):
    if server and port and senderAdd and password:

        name = fieldsDict["fname"]
        locale = fieldsDict["locale"]
        message = fieldsDict["message"]

        localeDataJson = open(f'./locale/{locale}.json')
        localeData = json.load(localeDataJson)

        with open(f'./templates/email-{locale}.html',
                  'r', encoding='utf-8') as f:
            html_string = Template(f.read())

        asparagus_cid = make_msgid()
        f.close()

        result = html_string.substitute(
            name=name, message=message, asparagus_cid=asparagus_cid[1:-1])

        msg = EmailMessage()

        msg.set_content(localeData["content"])
        msg.add_alternative(
            result, subtype="html")

        with open("./templates/logo.jpg", 'rb') as img:
            msg.get_payload()[1].add_related(img.read(), 'image', 'jpeg',
                                             cid=asparagus_cid)

        msg['Subject'] = localeData["subject"]
        msg['From'] = senderAdd
        msg['To'] = fieldsDict["email"]
        msg['CC'] = senderAdd

        smtp_server = smtplib.SMTP(server, int(port))
        smtp_server.starttls()

        smtp_server.login(senderAdd, password)
        smtp_server.send_message(msg)

        smtp_server.quit()
