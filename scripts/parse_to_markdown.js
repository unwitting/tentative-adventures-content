// Paste this into the console on a 'Full version' view Google cache page for a post to output markdown
let finished, markdownLines

finished = false
markdownLines = []

$('.post-content').children().each((i, child) => {
  if (finished) { return }
  if ($(child).hasClass('tag-container')) { return }
  if ($(child).hasClass('author-info')) { finished = true; return }
  if ($(child).find('img').length) {
    markdownLines.push(`![](${$($(child).find('img').get(0)).attr('src')})`)
    return
  }
  let line = $.trim($(child).text())
  if ($(child).hasClass('post-image')) { line = `# ${line}` }
  if ($(child).is('h2')) { line = `## ${line}` }
  if ($(child).is('h3')) { line = `### ${line}` }
  if ($(child).is('hr')) { line = `---` }
  markdownLines.push(line)
})

console.log(markdownLines.join('\n\n'))
