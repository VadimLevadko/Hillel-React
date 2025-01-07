import React from 'react';

export default class App extends React.Component {
  render() {

      const showResult = (e) => {
          e.preventDefault();

          const results = Array.from(document.querySelectorAll('.form-check'));

          const winner = results.reduce((acc, el) => {
              const voteCount = el.querySelector('.vote-count');
              voteCount.classList.remove('d-none');
              const voteCountValue = Number(voteCount.textContent);

              if (acc.maxValue >= voteCountValue) return acc;

              acc.maxValue = voteCountValue;
              acc.emoji = el.querySelector('.form-check-label').innerText;

              return acc;
          }, {maxValue: 0, emoji: null});

          const winnerBoard = document.querySelector('.winner-board')
          return winnerBoard.innerHTML = `Winner: ${winner.emoji}`;
      }

      let isAlreadyVoted = false;

      const disableVotes = () => {
          const inputs = document.querySelectorAll('.form-check-input');

          inputs.forEach((input) => {
              if(input.hasAttribute('data-voted')) return;

              input.setAttribute('disabled', '');
          })
      }

      const registerVoteHandler = ({target}) => {
        if(isAlreadyVoted) return;
        isAlreadyVoted = true;

        const parentEl = target.closest('.form-check');

        const input = parentEl.querySelector('.form-check-input');
        input.setAttribute('data-voted', '');

        const spanResult = parentEl.querySelector('span');
        disableVotes()
        return spanResult.innerHTML = Number(spanResult.innerHTML) + 1;
      }

      return (
          <div className="emoji-vote w-25 mx-auto p-3 bg-success bg-gradient border border-3 border-warning border-opacity-75 rounded text-light">
              <h1 className="fw-bold">What is the best emoji?</h1>
              <form onSubmit={showResult}>
                  <div onClick={registerVoteHandler} className="form-check fs-2">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                          💕
                      </label>
                      <span className="vote-count d-none">0</span>
                  </div>
                  <div onClick={registerVoteHandler} className="form-check fs-2">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                          ❄️
                      </label>
                      <span className="vote-count d-none">0</span>
                  </div>
                  <div onClick={registerVoteHandler} className="form-check fs-2">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                      <label className="form-check-label" htmlFor="flexRadioDefault3">
                          ✨
                      </label>
                      <span className="vote-count d-none">0</span>
                  </div>
                  <button type="submit" className="btn btn-primary mt-2">VIEW RESULTS</button>
              </form>
              <h2 className="winner-board mt-2 fw-bold fs-1"></h2>
          </div>
      )
  }
}
