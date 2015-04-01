export default function() {

  this.transition(
    this.toRoute('hello'),
    this.use('toLeft')
  );

  this.transition(
    this.toRoute('goodbye'),
    this.use('toRight')
  );
}
