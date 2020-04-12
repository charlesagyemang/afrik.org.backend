task :c do

  ARGV.each { |a| task a.to_sym do ; end }
  puts `git add . && git commit -am "#{ARGV[1].to_s}"`

end


task :push do

  ARGV.each { |a| task a.to_sym do ; end }
  puts `git add . && git commit -am "#{ARGV[1].to_s}" && git push origin #{ARGV[2]}`

end
