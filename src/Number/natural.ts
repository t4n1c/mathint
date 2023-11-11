export class NaturalNumber
{
    private number: BigInt;

    constructor(number: BigInt)
    {
        this.number = number;
    }

    getNumber()
    {
        return this.number;
    }
}