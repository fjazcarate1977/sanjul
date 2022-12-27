from flask import abort

from mailserver import activate_server


class FormField:

    def __init__(self, name, value):
        self.name = name
        self.value = value


def send_email(applicant):
    inputFields = [
        FormField("fname", applicant.get("fname")),
        FormField("email", applicant.get("email")),
        FormField("message", applicant.get("message")),
        FormField("locale", applicant.get("locale"))
    ]

    fieldsDict = {}

    for field in inputFields:
        fieldsDict[field.name] = field.value

    try:
        activate_server(fieldsDict)
        return fieldsDict, 201
    except ValueError:
        abort(
            406,
            "Something went wrong sending the email",
        )
