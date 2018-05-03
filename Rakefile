require 'rake'
require 'rake/testtask'

$LOAD_PATH.unshift(File.join(File.dirname(__FILE__), *%w[lib]))

Rake::TestTask.new(:test) do |test|
  test.libs << 'lib' << 'test'
  test.pattern = 'test/**/test_*.rb'
  test.verbose = true
end
