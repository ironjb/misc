import sublime, sublime_plugin, re
class AngularModuleToAttributeCommand(sublime_plugin.TextCommand):
	def run(self, edit):
		for region in self.view.sel():
			if not region.empty():
				# Get the selected text
				s = self.view.substr(region)
				newText = ''
				for c in list(s):
					if c.isspace():
						print('Error: spaces not allowed. Function Terminated.')
						return
					if c.isupper():
						newText += '-' + c.lower()
						# print(c)
					else:
						newText += c
				print(s)
				print(newText)
				self.view.replace(edit, region, newText)
				# Transform it via rot13
				# s = s.encode('rot13')
				# Replace the selection with transformed text
				# self.view.replace(region, s)
				# mduMyAngularDirective
class AngularAttributeToModuleCommand(sublime_plugin.TextCommand):
	def run(self, edit):
		for region in self.view.sel():
			if not region.empty():
				s = self.view.substr(region)
				nextCharIsUpper = False
				newText = ''
				for c in list(s):
					if c.isspace():
						print('Error: spaces not allowed. Function Terminated.')
						return
					elif c == '-':
						nextCharIsUpper = True
					elif nextCharIsUpper:
						newText += c.upper()
						nextCharIsUpper = False
					else:
						newText += c
				# print(s)
				# print(newText)
				self.view.replace(edit, region, newText)

# view.run_command('angular_escape_single_quote')
class AngularEscapeSingleQuoteCommand(sublime_plugin.TextCommand):
	def run(self, edit):
		for region in self.view.sel():
			if not region.empty():
				s = self.view.substr(region)
				s = s.replace("\\'", "\\\\'")
				print(s)
				self.view.replace(edit, region, s)

# view.run_command('razor_remove_comments')
# @* a comment *@ some code @* second comment *@
# @* 3 comment *@ some code @* forthy comment *@
class RazorRemoveCommentsCommand(sublime_plugin.TextCommand):
	def run(self, edit):
		for region in self.view.sel():
			if not region.empty():
				s = self.view.substr(region)
				newS = ""
				splitArray = s.split('@*')

				for i, sa in enumerate(splitArray):
					newA = sa.split('*@')
					# print(i,"\t", len(newA), "\t", newA[0])
					if len(newA) > 1:
						newS += newA[1]
					else:
						newS += newA[0]
				# print('{{',newS,'}}')
				removeEmptyLines = re.sub(r'\n\t*\n','\n', newS)
				# print(removeEmptyLines)
				newS = removeEmptyLines
				self.view.replace(edit, region, newS)
				# some code and stuff

				# some more code
