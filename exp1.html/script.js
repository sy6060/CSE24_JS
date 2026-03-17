// function calculateResult(){
// const m=document.getElementById("subjects").value;
// let total=0;
// let i;
// for(i=0;i<n;i++){
// let x=parsFloat(prompt("Enter the subject number"+(i+1)));
// total=total+x;
// }
// let avg=total/n;
// let grade;
// if(avg>90){
//     grade="A";
// }
// else if(avg>80){
//     grade="B";
// }
// else{
//     grade="C";
// }
// let r;
// if(avg>40)
//     r="pass";
// else r="fail";
// let result=document.getElementById("result").innerHTML="Total="+total+"<br>"+"Average="+avg+"<br>"+"Grade="+grade+"<br>"+"Result="+r;
// }


// script.js

// Utility: compute grade from percentage
function computeGrade(pct) {
  if (pct >= 90) return 'A+';
  if (pct >= 80) return 'A';
  if (pct >= 70) return 'B';
  if (pct >= 60) return 'C';
  if (pct >= 50) return 'D';
  return 'F';
}

// Validate a single mark string, return number or null
function parseMark(input) {
  if (input === null) return null; // user pressed Cancel
  input = input.trim();
  if (input === '') return NaN;
  const n = Number(input);
  if (!Number.isFinite(n)) return NaN;
  return n;
}

document.addEventListener('DOMContentLoaded', function () {
  const calcBtn = document.getElementById('calcBtn');
  const numInput = document.getElementById('numSubjects');
  const output = document.getElementById('output');
  const summary = document.getElementById('summary');
  const details = document.getElementById('details');

  calcBtn.addEventListener('click', function () {
    let n = Number(numInput.value);

    // Basic validation for number of subjects
    if (!Number.isInteger(n) || n <= 0) {
      alert('Please enter a valid positive integer for number of subjects.');
      return;
    }
    if (n > 50) {
      if (!confirm('You entered a large number of subjects. Continue?')) return;
    }

    const marks = [];
    for (let i = 1; i <= n; i++) {
      let raw = prompt('Enter marks for Subject ' + i);
      const parsed = parseMark(raw);

      if (parsed === null) {
        alert('Marks entry cancelled. Calculation aborted.');
        return;
      }
      if (Number.isNaN(parsed) || parsed < 0 || parsed > 100) {
        alert('Invalid mark for Subject ' + i + '. Please enter a number between 0 and 100.');
        i--; // repeat this subject
        continue;
      }
      marks.push(parsed);
    }

    // Compute totals
    const total = marks.reduce((s, v) => s + v, 0);
    const maxTotal = marks.length * 100;
    const percentage = (total / maxTotal) * 100;
    const grade = computeGrade(percentage);
    const pass = marks.every(m => m >= 40); // pass threshold per subject

    // Render results
    summary.innerHTML = '<strong>Total</strong>: ' + total + ' / ' + maxTotal +
                        '<br><strong>Percentage</strong>: ' + percentage.toFixed(2) + '%' +
                        '<br><strong>Grade</strong>: ' + grade +
                        '<br><strong>Status</strong>: ' + (pass ? 'Pass' : 'Fail');

    details.innerHTML = '<strong>Per subject marks</strong>:<br>' +
                        '<ul>' + marks.map((m, idx) => '<li>Subject ' + (idx+1) + ': ' + m + '</li>').join('') + '</ul>';

    output.hidden = false;
    output.setAttribute('tabindex', '-1');
    output.focus();
  });
});


