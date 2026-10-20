const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open'); menuButton?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

const notes = {
  split: {
    meta: 'MOVEMENT · FOOTWORK',
    title: 'The split step is a timing skill—not just a jump.',
    body: 'A useful coaching question is not simply “Did the player split step?” but “Was the movement timed to the opponent’s action, and did it help the player initiate the right first movement?” Observe the opponent’s contact, the player’s landing, their base position and the first directional push. Use video or a simple observation checklist when it helps clarify the pattern.',
    prompt: 'COACHING PROMPT: What cue or constraint could help this athlete connect opponent contact to an efficient first movement? Test it in a representative rally, not only in a predictable feed.'
  },
  shot: {
    meta: 'TACTICS · DECISION-MAKING',
    title: 'Every shot should solve a problem.',
    body: 'A shot can be technically clean and still be a poor decision. Consider the player’s balance, contact point, opponent position, available court space and likely reply. Review the rally as a sequence: what did this shot create, and was the player ready for the next action? Avoid treating a single outcome as proof that a decision was good or bad.',
    prompt: 'COACHING PROMPT: Pause a rally before contact. Ask the athlete to identify two options, explain the trade-off, then play the point and review the result.'
  },
  load: {
    meta: 'TRAINING · LOAD MANAGEMENT',
    title: 'Quality first. Fatigue is not the objective.',
    body: 'Before increasing repetitions or intensity, define the adaptation the drill is intended to develop. Track whether movement quality and decision-making remain appropriate, and build rest into the task based on its purpose. Training load should be individualised; pain, unusual symptoms or persistent performance changes warrant appropriate professional assessment.',
    prompt: 'COACHING PROMPT: Write down the purpose, work-to-rest structure and one observable quality marker before the session. Review whether the athlete’s response matched the intended stimulus.'
  }
};
const modal = document.getElementById('insight-modal');
function closeModal(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }
document.querySelectorAll('[data-topic]').forEach(button => button.addEventListener('click', () => {
  const note = notes[button.dataset.topic];
  document.getElementById('modal-meta').textContent = note.meta;
  document.getElementById('modal-title').textContent = note.title;
  document.getElementById('modal-body').textContent = note.body;
  document.getElementById('modal-prompt').textContent = note.prompt;
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
}));
document.querySelector('.modal-close')?.addEventListener('click', closeModal);
modal?.addEventListener('click', e => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });
