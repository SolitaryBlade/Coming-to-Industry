Events.on(EventType.ClientLoadEvent, cons(e => {
	var dialog = new JavaAdapter(BaseDialog, {}, "V158+ 将至[CTI]	当前版本号[Now Vision]:v5.8-----2026 7/8 11:15");
	var icon = new Packages.arc.scene.style.TextureRegionDrawable(Core.atlas.find("将至-提示", Core.atlas.find("clear")));
	dialog.shown(run(() => {
		dialog.cont.table(Tex.button, cons(t => {
			t.defaults().size(400, 200).left();
			t.button("我已知晓\n确认关闭\nI already know.\nConfirm Close", icon, Styles.cleart, run(() => {
				dialog.hide();
			}));
			t.add("[red]注意:5.6版本模组最低运行游戏版本已提高至155.2\n[white]如有任何问题\n欢迎前往Q群602687492进行反馈\n本模组已应用原版单位强化\n原版单位生命值已提升2-3倍\n单位伤害提高两倍或持有更多武器\n且部分单位持有特殊能力\nSorry the English version does \nnot currently support bug feedback")
		}));
	}));
	dialog.show();
}));