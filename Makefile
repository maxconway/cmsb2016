ALL : index.html organization.html registration.html call_papers.html call_posters.html calendar.html venue.html contact.html

%.html : header.phtml %.phtml footer.phtml warning.txt
	cat warning.txt header.phtml $*.phtml footer.phtml > $*.html

CLEAN : 
	rm *.html