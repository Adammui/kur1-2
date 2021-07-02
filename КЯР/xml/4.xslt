<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html><body>
		<h2> Ученики группы</h2>
		<table border="1" >
		<tr bgcolor="gray">
            <th style="text-align:center">Имя</th>
            <th style="text-align:center">Фамилия</th>
            <th style="text-align:center">Город</th>
            <th style="text-align:center">Проходной балл</th>
         </tr>

         <xsl:for-each select="group/student">
         	<xsl:sort select="name" order="ascending"/>
            <TR ALIGN="center">
               <TD>
                  <xsl:value-of select="name"/>
               </TD>
               <TD>
                  <xsl:value-of select="surname"/> 
               </TD>
               <TD>
                  <xsl:value-of select="city"/>
               </TD>

			<xsl:choose>
				<xsl:when test="passball &gt; 318">
    				<TD bgcolor= "green">
    					<xsl:value-of select="passball"/>
    				</TD>
    			</xsl:when>

    			<xsl:when test="passball &lt; 318">
    				<TD bgcolor= "red">
    					<xsl:value-of select="passball"/>
    				</TD>
    			</xsl:when>

    			<xsl:otherwise>
    				<TD >
    					<xsl:value-of select="passball"/>
    				</TD>
    			</xsl:otherwise>
    		</xsl:choose>

            </TR>
        </xsl:for-each>
        </table>
    	</body></html>
   </xsl:template>
</xsl:stylesheet>
