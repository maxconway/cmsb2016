THEMECSS="flatly.custom"

ALL : index.html organization.html registration.html call_papers.html call_posters.html program.html venue.html invited.html dates.html

%.html : header.phtml %.phtml footer.phtml 
	sed -e "s/CSSTHEME/$(THEMECSS)/" header.phtml > cat $*.phtml footer.phtml > $*.html 


CLEAN : 
	rm -f *.html

SERVE :
	python -m SimpleHTTPServer
