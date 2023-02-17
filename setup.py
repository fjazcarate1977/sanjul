from operator import attrgetter
import subprocess
import shutil
import argparse

dpd = "docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d"
dd = "docker compose up -d"
dp = "Running up Docker..."
ds = "Docker running succesfully :)"

pkg = "npm i && cd nodejs && npm i && npm run lerna-up"
pkgp = "Installing packages for development enviroment..."
pkgs = "Packages succesfully installed :)"

pipPkgp = "Installing python packages for development enviroment..."
pipPkgs = "Python packages succesfully installed :)"
pipPkg = "cd python/backend && pip install -r requirements.txt"


parser = argparse.ArgumentParser()
parser.add_argument('-e', '--environment',
                    choices=['dev', 'prod'],
                    required=True,
                    dest="env",
                    help="Select the environment to deploy: dev | prod.")
parser.add_argument('-v', '--verbose',
                    action='store_false',
                    dest="verbose",
                    help="Activate the verbose to show the logs")
args = parser.parse_args()


class runSubProcess:

    initMsg = "Initial Message"
    successMsg = "Success Message"
    process = "echo 'Azcárate's are the best'"
    verbose = True

    def __init__(self, initMsg, successMsg, process, verbose):
        self.initMsg = initMsg
        self.successMsg = successMsg
        self.process = process
        self.verbose = verbose

    def runProcess(self):
        print(self.initMsg)
        prcs = subprocess.run(
            self.process, shell=True, capture_output=self.verbose, text=True
        )
        if prcs.returncode <= 1:
            print(self.successMsg)
        else:
            print('Something went wrong :( ',
                  prcs.stderr if self.verbose else '')


env, verbose = attrgetter('env', 'verbose')(args)

if env == 'prod':
    file = input("Could you please provide me the keys file path? ")
    shutil.copyfile(file,
                    'nodejs/packages/frontend/src/lib/server/secrets.json')
    initPrcs = runSubProcess(dp, ds, dpd, verbose)
    initPrcs.runProcess()
else:
    initPkg = runSubProcess(pkgp, pkgs, pkg, verbose)
    initPkg.runProcess()
    initPipPkg = runSubProcess(pipPkgp, pipPkgs, pipPkg, verbose)
    initPipPkg.runProcess()
    initDevPrcs = runSubProcess(dp, ds, dd, verbose)
    initDevPrcs.runProcess()
