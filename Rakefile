task :commit do

  ARGV.each { |a| task a.to_sym do ; end }
  puts `git add . && git commit -am "#{ARGV[1].to_s}"`

end


task :test do

  ARGV.each { |a| task a.to_sym do ; end }

  answer = ARGV[1].to_i + ARGV[2].to_i

  puts answer

end
