from pdflatex import PDFLaTeX
import subprocess
import os


current_path = os.path.dirname(os.path.dirname(__file__))
media_folder = os.path.join(current_path, 'Portfolio_Builder\\testResume.tex')
print(media_folder)




tex_file = media_folder
command = ['pdflatex', tex_file]

# Run the pdflatex command
subprocess.run(command)

# The compiled PDF should be generated as "main.pdf"
#
#
#def my_function():
#    """
#    This is a docstring with an f-string-like placeholder: {placeholder}.
#    """
#    placeholder = "some value"
#    docstring_with_placeholder = my_function.__doc__.format(placeholder=placeholder)
#    print(docstring_with_placeholder)
#
