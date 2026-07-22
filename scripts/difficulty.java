package mindustry.game;

import arc.*;

public enum Difficulty{
    //TODO these need tweaks
    casual(0.45f, 0.2f, 3f),
    easy(0.7f, 0.55f, 2f),
    normal(1f, 1f, 1f),
    hard(1.75f, 1.75f, 0.75f),
    eradication(2.3f, 2.5f, 0.3f);

    public static final Difficulty[] all = values();

    //TODO add more fields
    public float enemyHealthMultiplier, enemySpawnMultiplier, waveTimeMultiplier;

    Difficulty(float enemyHealthMultiplier, float enemySpawnMultiplier, float waveTimeMultiplier){
        this.enemySpawnMultiplier = enemySpawnMultiplier;
        this.waveTimeMultiplier = waveTimeMultiplier;
        this.enemyHealthMultiplier = enemyHealthMultiplier;
    }

    public String info(){
        String res =
        (enemyHealthMultiplier == 1f ? "" : Core.bundle.format("difficulty.enemyHealthMultiplier", percentStat(enemyHealthMultiplier)) + "\n") +
        (enemySpawnMultiplier == 1f ? "" : Core.bundle.format("difficulty.enemySpawnMultiplier", percentStat(enemySpawnMultiplier)) + "\n") +
        (waveTimeMultiplier == 1f ? "" : Core.bundle.format("difficulty.waveTimeMultiplier", percentStatNeg(waveTimeMultiplier)) + "\n");

        return res.isEmpty() ? Core.bundle.get("difficulty.nomodifiers") : res;
    }

    public String localized(){
        return Core.bundle.get("difficulty." + name());
    }

    static String percentStat(float val){
        return ((int)(val * 100 - 100) > 0 ? "[negstat]+" : "[stat]") + (int)(val * 100 - 100) + "%[]";
    }

    static String percentStatNeg(float val){
        return ((int)(val * 100 - 100) > 0 ? "[stat]+" : "[negstat]") + (int)(val * 100 - 100) + "%[]";
    }
}
