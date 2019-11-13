# formvalidat
		<form>
			<table >
				<tr>
					<td>用户名</td>
					<td></td>
					<td><input type="text" name="name"  data-title="用户名" data-rule="required;length:10"/></td>
					<td></td>
				</tr>
				<tr>
					<td>性别</td>
					<td></td>
					<td><input type="text" name="sex"  data-title="性别" data-rule="required;length:1"/></td>
					<td></td>
				</tr>
				<tr>
					<td>年龄</td>
					<td></td>
					<td><input type="text" name="age"  data-title="年龄" data-rule="required;number;length:1,3"/></td>
					<td></td>
				</tr>
				<tr>
					<td>学校</td>
					<td></td>
					<td><input type="text" name="school"  /></td>
					<td></td>
				</tr>
				<tr>
					<td colspan="4"><input type="submit" value="提交" /></td>
				</tr>
			</table>
		</form>
		
	<script type="text/javascript" src="validat.1.0.1.js" ></script>
