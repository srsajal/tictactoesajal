import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'app-gameboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gameboard.component.html',
  styleUrl: './gameboard.component.scss'
})
export class GameboardComponent implements OnInit {
  board: string[][];
  currentPlayer: string;
  winner: string;
  themeIcon : string;
  
  changetheme(): void {
    this.themeService.toggleTheme();
    // document.body.classList.toggle('dark-theme');
    
    // // Switch the icon based on the theme
    // if (document.body.classList.contains('dark-theme')) {
    //   this.themeIcon = '../assets/sun.png';  // Change to sun icon in dark theme
    // } else {
    //   this.themeIcon = '../assets/moon.png';  // Change to moon icon in light theme
    // }
  }
  
  


  constructor(private themeService : ThemeService) {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = 'X';
    this.winner = '';
    this.themeIcon = '../assets/moon.png';
  }

  ngOnInit(): void {
    // if (document.body.classList.contains('dark-theme')) {
    //   this.themeIcon = '../assets/sun.png';
    // } else {
    //   this.themeIcon = '../assets/moon.png';
    // }
  }

  newGame(): void {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = 'X';
    this.winner = '';
  }

  checkDraw(): boolean {
    return this.board.flat().every(cell => cell);
  }
  
  makeMove(row: number, col: number): void {
    if (!this.board[row][col] && !this.winner) {
      this.board[row][col] = this.currentPlayer;
      if (this.checkWinner()) {
        this.winner = this.currentPlayer;
      } else if (this.checkDraw()) {
        this.winner = 'Draw';
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWinner(): boolean {
    // Check rows, columns, and diagonals
    for (let i = 0; i < 3; i++) {
      if (this.board[i][0] && this.board[i][0] === this.board[i][1] && this.board[i][0] === this.board[i][2]) {
        return true;
      }
      if (this.board[0][i] && this.board[0][i] === this.board[1][i] && this.board[0][i] === this.board[2][i]) {
        return true;
      }
    }
    if (this.board[0][0] && this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2]) {
      return true;
    }
    if (this.board[0][2] && this.board[0][2] === this.board[1][1] && this.board[0][2] === this.board[2][0]) {
      return true;
    }
    return false;
  }

}