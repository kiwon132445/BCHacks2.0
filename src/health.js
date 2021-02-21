class Health extends gameplay_scene
{

    constructor()
    {
        super(game);
        this.bar=this.create(0,0,"statusBar");
    }
    setPercent(percent)
    {
        percent=percent/100
        this.bar.width=300*percent;

    }

}