const Ray = function() {
  const ray = {
      length: 0,
      
      push: function(value) {
        const index = this.length;
        this[index] = value;
        
        this.length++;
      },

      pop: function() {
        const lastIndex = this.length - 1;
        const removed = this[lastIndex];
        delete this[lastIndex];
        this.length--;

        return removed;
      },

      includes: function(search) {  
        for(let i = 0; i < this.length; i++) {
            if(this[i] === search) {
                return true;
            }
        }

        return false;
      },

      indexOf: function(value) {
          for(let i = 0; i < this.length; i++) {
              if(this[i] === value) {
                  return i;
              }
          }

          return -1;
      },

      shift: function() {
        const removed = this[0];
        delete this[0];
        this.length--;

        for(let i = 0; i < this.length; i++) {
            const temp = this[i + 1];
            this[i] = temp;
        }

        const last = this.length;
        delete this[last];

        return removed;
      },

      unshift: function(newValue) {
        // Loop through the object's values
        // Store the previous value at 0
        // Have a temporary index to hold the current value
        // Set the current index to the previous value
        // Set the previous value equal to the temporary value
        let prev = this[0];
        for(let i = 1; i <= this.length; i++) {
          let temp = this[i];

          this[i] = prev;
          prev = temp;
        }

        
        this[0] = newValue;
        this.length++;
      }
  }

  return ray;
}


module.exports = Ray
