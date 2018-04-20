#! /bin/bash

set -e

DEPLOY_REPO="https://${DEPLOY_BLOG_TOKEN}@github.com/axerunners/axerunners.github.io.git"

function main {
	clean
	get_current_site
	build_site
}

function clean {
	echo "cleaning _site folder"
	if [ -d "_site" ]; then rm -Rf _site; fi
}

function get_current_site {
	echo "getting latest site"
	git clone --depth 1 $DEPLOY_REPO _site
}

function build_site {
	echo "building site"
	bundle exec jekyll build
}

main

function deploy {
	echo "deploying changes"

	if [ -z "$TRAVIS_PULL_REQUEST" ]; then
	    echo "except don't publish site for pull requests"
	    exit 0
	fi

	if [ "$TRAVIS_BRANCH" != "master" ]; then
	    echo "except we should only publish the master branch. stopping here"
	    exit 0
	fi

	cd _site
	git config --global user.name "Travis CI"
    git config --global user.email paul.dambra+travis@gmail.com
	git add -A
	git status
	git commit -m "Lastest site built on successful travis build $TRAVIS_BUILD_NUMBER auto-pushed to github"
	git push $DEPLOY_REPO master:master
}
