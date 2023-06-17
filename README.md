Resume Creator

This project is a Resume Creator web application implemented using HTML, CSS, and JavaScript. It allows users to input their personal and educational information and generates a resume view based on the provided data.


Usage

To use the Resume Creator:

    Open the HTML file (Education.html) in a web browser.
    Fill in the input fields with your personal details, such as name, address, college information, degree, GPA, etc.
    Click the "Go to Skills" button to navigate to the skills section.
    Fill in the skills information, including languages, operating systems, software/developer tools, and relevant coursework.
    The resume view on the right side of the page will update dynamically based on the entered information.

Generating PDF

You can generate a PDF version of the resume using pdflatex by following these steps:

    Install pdflatex if it is not already installed on your system.
    Open the Python script file generate_pdf.py.
    Set the media_folder variable to the path of the LaTeX file (testResume.tex) that you want to compile.
    Run the script.
    The compiled PDF should be generated as "main.pdf" in the same folder.

Web Page Structure

The web page consists of the following sections:

    Tool Bar: A header section displaying the title "RESUME CREATOR."
    Body: Divided into two main sections:
        Properties: The left section where users can input their personal and educational details.
        View: The right section that displays the resume view based on the entered information.
            It includes sections for address, education details, technical skills, work experience, and projects.

Contributing

If you would like to contribute to this project, you can make improvements or add new features to enhance the Resume Creator. Feel free to fork the repository, make your changes, and submit a pull request.
License

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code for personal or commercial purposes.
