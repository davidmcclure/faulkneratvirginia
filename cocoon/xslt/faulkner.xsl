<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:tei="http://www.tei-c.org/ns/1.0"
	xmlns:addthis="http://www.addthis.com/help/api-spec" exclude-result-prefixes="xs tei"
	version="2.0">

	<xsl:output method="html" doctype-system="-//W3C//DTD XHTML 1.0 Transitional//EN"
		doctype-public="http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"
		encoding="iso-8859-1" indent="yes"/>
	<xsl:include href="header.xsl"/>
	<xsl:include href="footer.xsl"/>

	<xsl:param name="q"/>
	<xsl:param name="path">../</xsl:param>

	<xsl:template match="/">
		<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
			<head>
				<title>
					<xsl:value-of select="document('../data/site_info.xml')//title"/>: <xsl:value-of
						select="TEI.2/teiHeader/fileDesc/titleStmt/title"/>
				</title>
				<link rel="stylesheet" type="text/css" href="{$path}style.css" media="screen,projection"/>
				<link type="text/css" href="{$path}print.css" rel="stylesheet" media="print" />				
        <script type="text/javascript" src="{$path}javascript/jquery-1.3.2.min.js">//</script>
        <script type="text/javascript" src="{$path}javascript/audio.js">//</script>
			</head>
			<body>		
				
				<div id="wrap">
					<xsl:call-template name="header"/>
					<div class="content">
						<xsl:apply-templates select="TEI.2/text/body"/>
					</div>
					<xsl:call-template name="footer"/>
				</div>
				<script type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js#pub=xa-4b141d5f4ca01146"/>
				<!-- AddThis Button END -->
				<script type="text/javascript" src="{$path}javascript/addthis_urls.js">//</script>
			</body>
		</html>

	</xsl:template>

	<xsl:template match="div1">
		<xsl:call-template name="toc"/>

		<div id="main">
			<a name="top"/>
			<xsl:for-each select="head">
				<h3>
					<xsl:value-of select="."/>
				</h3>
			</xsl:for-each>
			
      <p>
        <img src="/entire_recording.png" id="entire_recording" alt="Play entire recording" />
        <div class="entireclip">

          <xsl:variable name="filename" select="//idno[@type='digital audio filename']"/>

          <xsl:variable name="basename">
              <xsl:value-of select="translate(/TEI.2/teiHeader/fileDesc/publicationStmt/idno[@type='analog tape'], '-', '')" />
          </xsl:variable>

          <audio controls="true" preload="auto" id="{$basename}">
            <source src="http://faulkner.lib.virginia.edu/static/audio/{$basename}.mp3" type="audio/mpeg; codecs='mp3';"></source>
            <source src="http://faulkner.lib.virginia.edu/static/audio/{$basename}.ogg" type="audio/ogg; codecs='vorbis';"></source>
          </audio>

        </div>
      </p>
			
			<hr/>
			<xsl:apply-templates select="div2"/>
			<p class="end"><span class="event tooltip">[<i>end of recording</i>]</span></p>
		</div>
	</xsl:template>

	<xsl:template match="div2">
		<a name="{@id}"/>
		
		<div class="player-line">		

      <xsl:variable name="filename" select="//idno[@type='digital audio filename']"/>

      <div class="clip">
        <p><i class="icon-play-sign" id="{$filename}" data-start="{@start}" data-end="{@end}">[play]</i></p>
      </div>

      <a href="#top" class="top_button"><img src="{$path}top.png" alt=" link to top of the page" title="top" /></a>
		
		</div>
		
		<xsl:apply-templates select="u"/>

		<hr/>
	</xsl:template>

	<xsl:template name="toc">
		<div id="nav">
			<ul>
				<xsl:for-each select="div2">
					<li>
						<a href="#{@id}">
							<xsl:value-of select="head"/>
						</a>
					</li>
				</xsl:for-each>
			</ul>
		</div>
	</xsl:template>
	
	<xsl:template match="writing">
		<p class="writing">
			<span class="tooltip" title="Reading">
			<xsl:apply-templates />
			</span>
		</p>
	</xsl:template>

	<xsl:template match="u">
		<!-- don't use this for realz -->
		<xsl:variable name="speakers" select="/TEI.2/teiHeader/profileDesc/particDesc"/>
		<xsl:variable name="who" select="@who"/>
		<p>
			<strong><xsl:value-of select="//*[@id = $who]"/>: </strong><xsl:apply-templates/>
		</p>
	</xsl:template>

	<xsl:template match="unclear">
		<span class="unclear tooltip" title="Text was unclear">[<xsl:apply-templates/>]</span>
	</xsl:template>

	<xsl:template match="gap">
		<span class="gap tooltip" title="There was a gap in the tape">[<i>gap in tape</i>]</span>
	</xsl:template>

	<xsl:template match="inaudible">
		<span class="inaudible tooltip" title="Text was inaudible">[...]</span>
	</xsl:template>

	<xsl:template match="event[not(@desc='end of recording')]">
		<span class="event tooltip" title="There was some {@desc} happening">[<i><xsl:value-of select="@desc"/></i>]</span>
	</xsl:template>

	<xsl:template match="lb">
		<br/>
	</xsl:template>

	<xsl:template match="hi">
		<xsl:if test="@rend='italic'">
			<em><xsl:apply-templates/></em>
		</xsl:if>

	</xsl:template>

</xsl:stylesheet>
