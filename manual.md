# Maintenance instructions for AXErunners website

The website runs on [Jekyll](https://github.com/jekyll/jekyll) and currently hosted on GitHub Pages. Use the protocol below for maintenance and contribution tasks.

> Check [Official documentation](https://jekyllrb.com/docs/installation/) for Ubuntu installation

### Requirements
* Ruby 2.2.5 and above
* RubyGems
* GCC
* Make

## macOS
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
Build the code and host its local copy
```
jekyll serve
```
Now you can access local deployment with http://127.0.0.1:4000 to test updates/changes. After passing local checks - create PR on GitHub to submit code changes.
