# Maintenance instructions for AXErunners website

The website runs on [Jekyll](https://github.com/jekyll/jekyll) and currently hosted on GitHub Pages. Use the protocol below for maintenance and contribution tasks.

### Requirements
* Ruby 2.2.5 and above
* RubyGems
* GCC
* Make

## macOS
Install Homebrew, Git
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install git
```
Install Jekyll and Xcode (you also need Bundler to handle plugins)
```
xcode-select --install
gem install bundler jekyll
```
Install Gems
```
bundle install
```
Update Gems, if necessary
```
bundle update
```
Build the code and host local copy on http://127.0.0.1:4000
```
jekyll serve
```

[Official documentation](https://jekyllrb.com/docs/installation/)
