'use strict';

window.examplePlayers = [{
  name: 'LeBron James',
  number: 23,
  team: 'Cleveland Cavaliers',
  ratings: {
    offense: {
      overall: 9.3,
      shooting: 8,
      passing: 10,
      dribbling: 9,
      awareness: 10
    },
    defense: {
      overall: 9.3,
      blocking: 10,
      stealing: 7,
      rebounding: 10,
      awareness: 10
    }
  }
}, {
  name: 'Stephen Curry',
  number: 30,
  team: 'Golden State Warriors',
  ratings: {
    offense: {
      overall: 10,
      shooting: 10,
      passing: 10,
      dribbling: 10,
      awareness: 10
    },
    defense: {
      overall: 8.5,
      blocking: 6,
      stealing: 10,
      rebounding: 8,
      awareness: 10
    }
  }
}, {
  name: 'Kevin Durant',
  number: 35,
  team: 'Golden State Warriors',
  ratings: {
    offense: {
      overall: 9.5,
      shooting: 10,
      passing: 10,
      dribbling: 8,
      awareness: 10
    },
    defense: {
      overall: 8.5,
      blocking: 8,
      stealing: 8,
      rebounding: 8,
      awareness: 10
    }
  }
}, {
  name: 'Carmelo Anthony',
  number: 7,
  team: 'New York Knicks',
  ratings: {
    offense: {
      overall: 8.3,
      shooting: 10,
      passing: 7,
      dribbling: 8,
      awareness: 8
    },
    defense: {
      overall: 7.8,
      blocking: 7,
      stealing: 8,
      rebounding: 8,
      awareness: 8
    }
  }
}, {
  name: 'Dwayne Wade',
  number: 3,
  team: 'Chicago Bulls',
  ratings: {
    offense: {
      overall: 9,
      shooting: 8,
      passing: 9,
      dribbling: 9,
      awareness: 10
    },
    defense: {
      overall: 9.5,
      blocking: 10,
      stealing: 9,
      rebounding: 9,
      awareness: 10
    }
  }
}];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9kYi9leGFtcGxlUGxheWVycy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJleGFtcGxlUGxheWVycyIsIm5hbWUiLCJudW1iZXIiLCJ0ZWFtIiwicmF0aW5ncyIsIm9mZmVuc2UiLCJvdmVyYWxsIiwic2hvb3RpbmciLCJwYXNzaW5nIiwiZHJpYmJsaW5nIiwiYXdhcmVuZXNzIiwiZGVmZW5zZSIsImJsb2NraW5nIiwic3RlYWxpbmciLCJyZWJvdW5kaW5nIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPQyxjQUFQLEdBQXdCLENBQ3RCO0FBQ0VDLFFBQU0sY0FEUjtBQUVFQyxVQUFRLEVBRlY7QUFHRUMsUUFBTSxxQkFIUjtBQUlFQyxXQUFTO0FBQ1BDLGFBQVM7QUFDUEMsZUFBUyxHQURGO0FBRVBDLGdCQUFVLENBRkg7QUFHUEMsZUFBUyxFQUhGO0FBSVBDLGlCQUFXLENBSko7QUFLUEMsaUJBQVc7QUFMSixLQURGO0FBUVBDLGFBQVM7QUFDUEwsZUFBUyxHQURGO0FBRVBNLGdCQUFVLEVBRkg7QUFHUEMsZ0JBQVUsQ0FISDtBQUlQQyxrQkFBWSxFQUpMO0FBS1BKLGlCQUFXO0FBTEo7QUFSRjtBQUpYLENBRHNCLEVBc0J0QjtBQUNFVCxRQUFNLGVBRFI7QUFFRUMsVUFBUSxFQUZWO0FBR0VDLFFBQU0sdUJBSFI7QUFJRUMsV0FBUztBQUNQQyxhQUFTO0FBQ1BDLGVBQVMsRUFERjtBQUVQQyxnQkFBVSxFQUZIO0FBR1BDLGVBQVMsRUFIRjtBQUlQQyxpQkFBVyxFQUpKO0FBS1BDLGlCQUFXO0FBTEosS0FERjtBQVFQQyxhQUFTO0FBQ1BMLGVBQVMsR0FERjtBQUVQTSxnQkFBVSxDQUZIO0FBR1BDLGdCQUFVLEVBSEg7QUFJUEMsa0JBQVksQ0FKTDtBQUtQSixpQkFBVztBQUxKO0FBUkY7QUFKWCxDQXRCc0IsRUEyQ3RCO0FBQ0VULFFBQU0sY0FEUjtBQUVFQyxVQUFRLEVBRlY7QUFHRUMsUUFBTSx1QkFIUjtBQUlFQyxXQUFTO0FBQ1BDLGFBQVM7QUFDUEMsZUFBUyxHQURGO0FBRVBDLGdCQUFVLEVBRkg7QUFHUEMsZUFBUyxFQUhGO0FBSVBDLGlCQUFXLENBSko7QUFLUEMsaUJBQVc7QUFMSixLQURGO0FBUVBDLGFBQVM7QUFDUEwsZUFBUyxHQURGO0FBRVBNLGdCQUFVLENBRkg7QUFHUEMsZ0JBQVUsQ0FISDtBQUlQQyxrQkFBWSxDQUpMO0FBS1BKLGlCQUFXO0FBTEo7QUFSRjtBQUpYLENBM0NzQixFQWdFdEI7QUFDRVQsUUFBTSxpQkFEUjtBQUVFQyxVQUFRLENBRlY7QUFHRUMsUUFBTSxpQkFIUjtBQUlFQyxXQUFTO0FBQ1BDLGFBQVM7QUFDUEMsZUFBUyxHQURGO0FBRVBDLGdCQUFVLEVBRkg7QUFHUEMsZUFBUyxDQUhGO0FBSVBDLGlCQUFXLENBSko7QUFLUEMsaUJBQVc7QUFMSixLQURGO0FBUVBDLGFBQVM7QUFDUEwsZUFBUyxHQURGO0FBRVBNLGdCQUFVLENBRkg7QUFHUEMsZ0JBQVUsQ0FISDtBQUlQQyxrQkFBWSxDQUpMO0FBS1BKLGlCQUFXO0FBTEo7QUFSRjtBQUpYLENBaEVzQixFQXFGdEI7QUFDRVQsUUFBTSxhQURSO0FBRUVDLFVBQVEsQ0FGVjtBQUdFQyxRQUFNLGVBSFI7QUFJRUMsV0FBUztBQUNQQyxhQUFTO0FBQ1BDLGVBQVMsQ0FERjtBQUVQQyxnQkFBVSxDQUZIO0FBR1BDLGVBQVMsQ0FIRjtBQUlQQyxpQkFBVyxDQUpKO0FBS1BDLGlCQUFXO0FBTEosS0FERjtBQVFQQyxhQUFTO0FBQ1BMLGVBQVMsR0FERjtBQUVQTSxnQkFBVSxFQUZIO0FBR1BDLGdCQUFVLENBSEg7QUFJUEMsa0JBQVksQ0FKTDtBQUtQSixpQkFBVztBQUxKO0FBUkY7QUFKWCxDQXJGc0IsQ0FBeEIiLCJmaWxlIjoiZXhhbXBsZVBsYXllcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuZXhhbXBsZVBsYXllcnMgPSBbXG4gIHtcbiAgICBuYW1lOiAnTGVCcm9uIEphbWVzJyxcbiAgICBudW1iZXI6IDIzLFxuICAgIHRlYW06ICdDbGV2ZWxhbmQgQ2F2YWxpZXJzJyxcbiAgICByYXRpbmdzOiB7XG4gICAgICBvZmZlbnNlOiB7XG4gICAgICAgIG92ZXJhbGw6IDkuMyxcbiAgICAgICAgc2hvb3Rpbmc6IDgsXG4gICAgICAgIHBhc3Npbmc6IDEwLFxuICAgICAgICBkcmliYmxpbmc6IDksXG4gICAgICAgIGF3YXJlbmVzczogMTBcbiAgICAgIH0sXG4gICAgICBkZWZlbnNlOiB7XG4gICAgICAgIG92ZXJhbGw6IDkuMyxcbiAgICAgICAgYmxvY2tpbmc6IDEwLFxuICAgICAgICBzdGVhbGluZzogNyxcbiAgICAgICAgcmVib3VuZGluZzogMTAsXG4gICAgICAgIGF3YXJlbmVzczogMTBcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnU3RlcGhlbiBDdXJyeScsXG4gICAgbnVtYmVyOiAzMCxcbiAgICB0ZWFtOiAnR29sZGVuIFN0YXRlIFdhcnJpb3JzJyxcbiAgICByYXRpbmdzOiB7XG4gICAgICBvZmZlbnNlOiB7XG4gICAgICAgIG92ZXJhbGw6IDEwLFxuICAgICAgICBzaG9vdGluZzogMTAsXG4gICAgICAgIHBhc3Npbmc6IDEwLFxuICAgICAgICBkcmliYmxpbmc6IDEwLFxuICAgICAgICBhd2FyZW5lc3M6IDEwXG4gICAgICB9LFxuICAgICAgZGVmZW5zZToge1xuICAgICAgICBvdmVyYWxsOiA4LjUsXG4gICAgICAgIGJsb2NraW5nOiA2LFxuICAgICAgICBzdGVhbGluZzogMTAsXG4gICAgICAgIHJlYm91bmRpbmc6IDgsXG4gICAgICAgIGF3YXJlbmVzczogMTBcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnS2V2aW4gRHVyYW50JyxcbiAgICBudW1iZXI6IDM1LFxuICAgIHRlYW06ICdHb2xkZW4gU3RhdGUgV2FycmlvcnMnLFxuICAgIHJhdGluZ3M6IHtcbiAgICAgIG9mZmVuc2U6IHtcbiAgICAgICAgb3ZlcmFsbDogOS41LFxuICAgICAgICBzaG9vdGluZzogMTAsXG4gICAgICAgIHBhc3Npbmc6IDEwLFxuICAgICAgICBkcmliYmxpbmc6IDgsXG4gICAgICAgIGF3YXJlbmVzczogMTBcbiAgICAgIH0sXG4gICAgICBkZWZlbnNlOiB7XG4gICAgICAgIG92ZXJhbGw6IDguNSxcbiAgICAgICAgYmxvY2tpbmc6IDgsXG4gICAgICAgIHN0ZWFsaW5nOiA4LFxuICAgICAgICByZWJvdW5kaW5nOiA4LFxuICAgICAgICBhd2FyZW5lc3M6IDEwXG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0Nhcm1lbG8gQW50aG9ueScsXG4gICAgbnVtYmVyOiA3LFxuICAgIHRlYW06ICdOZXcgWW9yayBLbmlja3MnLFxuICAgIHJhdGluZ3M6IHtcbiAgICAgIG9mZmVuc2U6IHtcbiAgICAgICAgb3ZlcmFsbDogOC4zLFxuICAgICAgICBzaG9vdGluZzogMTAsXG4gICAgICAgIHBhc3Npbmc6IDcsXG4gICAgICAgIGRyaWJibGluZzogOCxcbiAgICAgICAgYXdhcmVuZXNzOiA4XG4gICAgICB9LFxuICAgICAgZGVmZW5zZToge1xuICAgICAgICBvdmVyYWxsOiA3LjgsXG4gICAgICAgIGJsb2NraW5nOiA3LFxuICAgICAgICBzdGVhbGluZzogOCxcbiAgICAgICAgcmVib3VuZGluZzogOCxcbiAgICAgICAgYXdhcmVuZXNzOiA4XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0R3YXluZSBXYWRlJyxcbiAgICBudW1iZXI6IDMsXG4gICAgdGVhbTogJ0NoaWNhZ28gQnVsbHMnLFxuICAgIHJhdGluZ3M6IHtcbiAgICAgIG9mZmVuc2U6IHtcbiAgICAgICAgb3ZlcmFsbDogOSxcbiAgICAgICAgc2hvb3Rpbmc6IDgsXG4gICAgICAgIHBhc3Npbmc6IDksXG4gICAgICAgIGRyaWJibGluZzogOSxcbiAgICAgICAgYXdhcmVuZXNzOiAxMFxuICAgICAgfSxcbiAgICAgIGRlZmVuc2U6IHtcbiAgICAgICAgb3ZlcmFsbDogOS41LFxuICAgICAgICBibG9ja2luZzogMTAsXG4gICAgICAgIHN0ZWFsaW5nOiA5LFxuICAgICAgICByZWJvdW5kaW5nOiA5LFxuICAgICAgICBhd2FyZW5lc3M6IDEwXG4gICAgICB9XG4gICAgfVxuICB9XG5dOyJdfQ==