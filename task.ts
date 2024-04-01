class ArrayWrapper {
	nums: number[];
	
	constructor(nums: number[]) {
					this.nums = nums
	}
	
	valueOf(): number {
					return this.nums.concat().reduce((a, b) => a + b, 0)
	}
	
	toString(): string {
					return JSON.stringify(this.nums)
					
	}
};
