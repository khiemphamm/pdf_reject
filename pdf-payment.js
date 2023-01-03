// create a document and pipe to a blob
var doc = new PDFDocument({size: 'b4'});
var stream = doc.pipe(blobStream());

doc.fontSize(20)
doc.fillColor('#F58216')
doc.font('Times-Bold')
.text('Fees PAID to:')
doc.fontSize(24)
doc.fillColor('#000000')
.moveDown()
.text('THE CRAZY CHALLENGES AG')
.fillColor('#000000')
.text("                                                                                              ",{ width: 1000, underline: true })
.moveDown()
doc.fontSize(16)
.text('TOTAL Amount                                                                                       ',{
    continued: true
})
.text('USD ',{
    continued: true
})
.text('107.00')
.fillColor('#000000')
.text("                                                                                                                                             ",{ width: 1000, underline: true })
.moveDown()
.moveDown()
.moveDown()
doc.fontSize(18)
.text('Bank Details')
.moveDown()
doc.fontSize(16)
.text('Full Name                                               ',{
    continued: true
})
.text('Address, City')
doc.font('Times-Roman')
.text('The Crazy Challenges AG                       ',{
    continued: true
})
.text('Unterdorfstrasse 12, 8808 Pfäffikon')
.moveDown()
doc.font('Times-Bold')
.text('Country                                                  ',{
    continued: true
})
.text('Bank Name')
doc.font('Times-Roman')
.text('SWITZERLAND                                    ',{
    continued: true
})
.text('Raiffeissenbank Allschwil')
.moveDown()
doc.font('Times-Bold')
.text('BIC / SWIFT Code                               ',{
    continued: true
})
.text('IBAN No.')
doc.font('Times-Roman')
.text('RAIFCH22XXX                                     ',{
    continued: true
})
.text('CH99 8077 5111 1042 76')
.moveDown()
doc.font('Times-Bold')
.text('Account No.                                           ',{
    continued: true
})
.text('Routing No')
doc.font('Times-Roman')
.text('                                                                 ',{
    continued: true
})
.text('-')

// end and display the document in the iframe to the right
doc.end();
stream.on('finish', function() {
  iframe.src = stream.toBlobURL('application/pdf');
});