<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html><body>
		<h2> Список специальностей факультета ИТ</h2>
		<table border="1" >
		<tr bgcolor="gray">
            <th style="text-align:center">Специальность</th>
            <th style="text-align:center">Срок обучения</th>
            <th style="text-align:center">Университет</th>
            <th style="text-align:center">Предметы ЦТ</th>
            <th style="text-align:center">План набора</th>
            <th style="text-align:center">Проходной балл</th>
         </tr>
         <xsl:for-each select="faculty/specialization">
            <TR ALIGN="CENTER">
               <TD>
                  <xsl:value-of select="name"/>
               </TD>
               <TD>
                  <xsl:value-of select="period"/> 
               </TD>
               <TD>
                  <xsl:value-of select="city"/>
               </TD>
               <TD>
                  <xsl:value-of select="exam"/>
               </TD>
               <TD>
                  <xsl:value-of select="stud"/>
               </TD>
               <TD>
                  <xsl:value-of select="passball"/>
               </TD>
            </TR>
         </xsl:for-each>
        </table>
    	</body></html>
   </xsl:template>
</xsl:stylesheet>
