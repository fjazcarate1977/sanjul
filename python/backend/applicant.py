from flask import abort
import re

from mailserver import activate_server


class Formfield:

    def __init__(self, name, value, regex):
        self.name = name
        self.value = value
        self.regex = regex


fnameRegex = re.compile(r"^(\s|\w){4,30}$")
emailRegex = re.compile(r"^[^@]+[@][a-zA-Z]+\.[a-zA-Z]+")
messageRegex = re.compile(r"^.{3,50}$")


def send_email(applicant):
    inputFields = [
        Formfield("fname", applicant.get("fname"), fnameRegex),
        Formfield("email", applicant.get("email"), emailRegex),
        Formfield("message", applicant.get("message"), messageRegex)
    ]

    errors = []
    fieldsdict = {}

    for field in inputFields:
        if not re.fullmatch(field.regex, field.value):
            errors.append(field.name)
        else:
            fieldsdict[field.name] = field.value

    if not len(errors) > 0:
        activate_server(fieldsdict["email"])
        return fieldsdict, 201
    else:
        abort(
            406,
            errors,
        )
